import clsx from 'clsx';

/* eslint-disable-next-line */
export interface NavBarProps {
  children: React.ReactNode;
  className?: string | undefined;
  sticky?: boolean | undefined;
}

export function NavBar(props: NavBarProps) {
  return <nav className={clsx(props.className, props.sticky && 'sticky')}>{props.children}</nav>;
}

export default NavBar;
