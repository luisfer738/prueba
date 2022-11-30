import Styles from "../styles/SideBarStyles.module.css";
export default function SideBarMenuItems({ text, Icon, state }) {
  return (
    <div className={Styles.DivPrimaryMenuItems}>
      <Icon className="h-9 " />
      <span className={` ${state && "font-bold"} hidden  lg:inline lg:pl-3`}>
        {text}
      </span>
    </div>
  );
}
