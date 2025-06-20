import {currentUser} from "@/lib/userInfo";
import Navbar from "./_components/Navbar"

type Props = {
  children: React.ReactNode;
};

const PotectedLayout = async ({ children }: Props) => {
  const user = await currentUser();

  return (
    <div className="h-screen w-full flex flex-col gap-y-10 items-center justify-center bg-gray-400">
      <Navbar user={user ?? null} />
      {children}
    </div>
  );
};

export default PotectedLayout;
