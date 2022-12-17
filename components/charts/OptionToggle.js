import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";

import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";

export default function OptionToggle({ enabled, text, action, multi }) {
  const checkedIcon = multi ? (
    <CheckBoxOutlinedIcon />
  ) : (
    <RadioButtonCheckedOutlinedIcon />
  );
  const uncheckedIcon = multi ? (
    <CheckBoxOutlineBlankOutlinedIcon />
  ) : (
    <RadioButtonUncheckedOutlinedIcon />
  );

  return (
    <div
      className={enabled ? "option-toggle enabled" : "option-toggle"}
      onClick={action}
    >
      {enabled ? checkedIcon : uncheckedIcon}
      {text}
    </div>
  );
}
