import { SidebarTrigger } from "./ui/sidebar";

interface Props {
  toolName: string;
}

export const Navbar = ({ toolName }: Props) => {
  return (
    <nav className="flex items-center justify-between p-4 bg-background border-b">
      <div className="flex items-center">
        <SidebarTrigger className="mr-4 w-4 h-4" />
        <h1>{toolName}</h1>
      </div>
    </nav>
  );
};
