import { Button } from "../../ui/button";
import SendSvg from "@/assets/icons/send.svg";
import SettingSVG from "@/assets/icons/setting.svg";
import styles from "./dashbord.module.scss";
import { SettingIcon } from "../../ui/icons/settings-icon";

const DashBordPage = () => {
  return (
    <span className={styles.container}>
      <Button onClick={() => {}} text="Send" theme="blue" />
      <Button onClick={() => {}} text="Send" />
      <Button onClick={() => {}} text="Send" theme="blue" icon={SendSvg} />
      <Button onClick={() => {}} icon={SettingSVG} />
      <Button onClick={() => {}} icon={<SettingIcon />} />
    </span>
  );
};

export default DashBordPage;
