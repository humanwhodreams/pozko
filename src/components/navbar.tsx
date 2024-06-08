import Link from "next/link";
import { Switch } from "./ui/switch";
import UserButton from "./user-button";

export default function NavBar() {
  return (
    <header className="bg-background border-b fixed left-0 right-0 top-0 z-50">
      <nav className="px-4 py-2">
        <div className="flex items-center justify-between">
          <Link href={"/dashboard"}>
            <h4>Pozko</h4>
          </Link>

          <ul className="flex items-center">
            <li className="ml-4">
              <Switch />
            </li>
            <li className="ml-4">
              <UserButton />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
