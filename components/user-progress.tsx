import Link from "next/link";
import { Button } from "@/components/ui/button";

type Props = {
  activeCourse: any;
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

export const UserProgress = ({}: Props) => {
  return (
    <div className="flex items-center justify-between gap-x-2 w-full">
      <Link href="/courses">
        <Button></Button>
      </Link>
    </div>
  );
};
