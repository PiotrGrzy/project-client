import Tippy, { TippyProps } from '@tippyjs/react';

const Tooltip = (props: TippyProps) => {
  const { children, ...args } = props;
  return (
    <Tippy theme="material" className="p-1 bg-info-content/50 rounded-md text-white" delay={500} {...args}>
      {children}
    </Tippy>
  );
};

export default Tooltip;
