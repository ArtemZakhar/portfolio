import { type ComponentPropsWithRef, type ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

import classes from './button.module.scss';

type BaseProps = {
  children: ReactNode;
  textOnly?: boolean;
};

type ButtonProps = ComponentPropsWithRef<'button'> &
  BaseProps & {
    to?: never;
  };

type AnchorProps = LinkProps &
  BaseProps & {
    to?: string;
  };

type ComponentProps = ButtonProps | AnchorProps;

function isLinkProps(props: ComponentProps): props is AnchorProps {
  return 'to' in props;
}

export function Button(props: ComponentProps) {
  if (isLinkProps(props)) {
    const { to, children, textOnly, ...otherProps } = props;
    return (
      <Link
        to={to}
        className={`${classes.button} ${textOnly && classes['button--text-only']}`}
        {...otherProps}
      >
        {children}
      </Link>
    );
  }

  const { to, children, textOnly, ...otherProps } = props;

  return (
    <button
      className={`${classes.button} ${textOnly && classes['button--text-only']}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
