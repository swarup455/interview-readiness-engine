import { Router } from "express";
import {
    googleRedirect,
    googleCallback,
    completeOnboarding,
    getOnboardingStatus,
    logout,
    getMe,
} from "./authController.js";

import { authenticate } from "../../middleware/authMiddleware.js";

const router = Router();

router.get("/google", googleRedirect);
router.get("/google/callback", googleCallback);
router.post("/onboarding", authenticate, completeOnboarding);
router.get("/onboarding/status", authenticate, getOnboardingStatus);
router.get("/me", authenticate, getMe);
router.post("/logout", authenticate, logout);

export default router;