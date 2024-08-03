"use client";

import { challengeOptions, challenges } from "@/db/schema";

type Props = {
  initialLessonId: number;
  initialLessonChallenges: typeof challenges.$inferSelect &
    {
      completed: boolean;
      challengeOptions: (typeof challengeOptions.$inferSelect)[];
    }[];
  initialHearts: number;
  initialPercentage: number;
  userSubscription: any;
};

export const Quiz = ({
  initialLessonId,
  initialLessonChallenges,
  initialHearts,
  initialPercentage,
  userSubscription,
}: Props) => {
  return <div>Quiz</div>;
};
