import React, { useContext } from 'react';
import cx from 'classnames';
import NavContext from '../../util/context/NavContext';
import { nav, open, divider, link, linkDisabled } from './Switcher.module.scss';

const Switcher = ({ children }) => {
  const { switcherIsOpen } = useContext(NavContext);

  return (
    <nav
      className={cx(nav, { [open]: switcherIsOpen })}
      aria-label="IBM Design ecosystem navigation"
      aria-expanded={switcherIsOpen}
      tabIndex="-1"
    >
      <ul>{children}</ul>
    </nav>
  );
};

export const SwitcherDivider = (props) => (
  <li className={divider}>
    <span {...props} />
  </li>
);

export const SwitcherLink = ({
  disabled,
  children,
  href: hrefProp,
  ...rest
}) => {
  const href = disabled || !hrefProp ? undefined : hrefProp;
  const className = disabled ? linkDisabled : link;
  const { switcherIsOpen } = useContext(NavContext);

  return (
    <li>
      <a
        aria-disabled={disabled}
        role="button"
        tabIndex={switcherIsOpen ? 0 : '-1'}
        className={className}
        href={href}
        {...rest}
      >
        {children}
      </a>
    </li>
  );
};

// https://css-tricks.com/using-css-transitions-auto-dimensions/
// Note: if you change this, update the max-height in the switcher stylesheet
const DefaultChildren = () => {
  const eventLaunch = new Date('December 2, 2019');
  const today = new Date();

  // TODO: remove after 12/2/2019 launch
  const eventProps =
    today >= eventLaunch
      ? { href: 'https://www.ibm.com/design/event/' }
      : { disabled: true };

  return (
    <>
      <SwitcherDivider>Core Architecture</SwitcherDivider>
        <SwitcherLink href="https://apps.na.collabserv.com/wikis/home?lang=en-us#!/wiki/W9249b233310e_46b6_940b_d8ef762886cd">IBM Architect Resource Center</SwitcherLink>
        <SwitcherLink href="https://w3-01.ibm.com/services/methodweb/MethodWebUMF/#/home">IBM Method Web</SwitcherLink>
        <SwitcherLink href="https://certification.opengroup.org/openca">Open CA</SwitcherLink>
      <SwitcherDivider>Technical Enablment</SwitcherDivider>
        <SwitcherLink href="https://ibm.seismic.com/Link/Content/DCqEGYPwDwUUqk5NUlDLdxew">Data & AI</SwitcherLink>
        <SwitcherLink href="https://www.ibm.com/cloud/garage/architectures">IBM Garage</SwitcherLink>
        <SwitcherLink href="https://bluedemos.com/">Blue Demos</SwitcherLink>
        <SwitcherLink href="https://w3-03.ibm.com/services/lighthouse/">Light House</SwitcherLink>
        <SwitcherLink href="http://ibm.biz/cbdslearn">Cognitive Business Decisions Support </SwitcherLink>
        <SwitcherLink href="https://yourlearning.ibm.com/#home/queue">Your Learning</SwitcherLink>
        <SwitcherLink href="https://ibv.dst.ibm.com/">IBM Institute of Business Value</SwitcherLink>
        <SwitcherLink href="https://w3-connections.ibm.com/communities/service/html/communitystart?communityUuid=1e59cb6d-9e83-4341-85da-418fa11425b1">IBM Chief Data Office</SwitcherLink>
      <SwitcherDivider>Education</SwitcherDivider>
        <SwitcherLink href="https://ibm.seismic.com/Link/Content/DCqEGYPwDwUUqk5NUlDLdxew">IBM Skills Gateway</SwitcherLink>
        <SwitcherLink href="https://www.weforum.org/centre-for-the-fourth-industrial-revolution">Centre For 4IR</SwitcherLink>
        <SwitcherLink href="https://www.odpi.org/">ODPi</SwitcherLink>
        <SwitcherLink href="https://www.ibmbigdatahub.com/">Big Data & Analytics Hub</SwitcherLink>
        <SwitcherLink href="https://cognitiveclass.ai/">Cognitive Class </SwitcherLink>
        <SwitcherLink href="https://machinelearningmastery.com/">Machine Learning Mastery</SwitcherLink>
        <SwitcherLink href="https://ibv.dst.ibm.com/">IBM Academy of Technology</SwitcherLink>  
      <SwitcherDivider>GiveBack</SwitcherDivider>
        <SwitcherLink href="https://ciodock-fra.w3-969.ibm.com/coachme-prod-coachme-web-angularjs/#/">Coach Me</SwitcherLink>
        <SwitcherLink href="https://w3-connections.ibm.com/communities/service/html/communitystart?communityUuid=a1852c09-05ad-4f4b-8d2b-8422833e8678">Mentoring at IBM</SwitcherLink>
    </>
  );
};

Switcher.defaultProps = {
  children: <DefaultChildren />,
};

export default Switcher;
