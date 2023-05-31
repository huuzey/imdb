import Link from "next/link";

const Menuitem = ({ address, title, Icon }) => {
  return (
    <div>
      <Link href={address} className="mx-4 1g:mx-6 hover:text-amber-600">
        <Icon className="text-2x1 sm:hidden mx-4" />
        <p className="hidden sm:inline 2 text-sm">{title}</p>
      </Link>
    </div>
  );
};

export default Menuitem;
