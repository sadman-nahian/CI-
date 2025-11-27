import { clerkClient } from '@clerk/express';

export const auth = async (req, res, next) => {
  try {
    // Get user info and subscription checker from Clerk
    const { userId, has } = await req.auth();

    if (!userId) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    // Check if user has the premium plan
    const hasPremiumPlan = await has({ plan: 'premium' });

    // Fetch full user data
    const user = await clerkClient.users.getUser(userId);

    // Handle free usage for non-premium users
    if (!hasPremiumPlan && user.privateMetadata?.free_usage > 0) {
      req.free_usage = user.privateMetadata.free_usage;
    } else {
      // Reset free usage if premium or no usage left
      await clerkClient.users.updateUser(userId, {
        privateMetadata: {
          ...user.privateMetadata,
          free_usage: 0,
        },
      });
      req.free_usage = 0;
    }

    // Set the plan on the request
    req.plan = hasPremiumPlan ? 'premium' : 'free';

    next();
  } catch (e) {
    console.log('Auth middleware error:', e);
    res.status(500).json({ success: false, message: e.message });
  }
};
