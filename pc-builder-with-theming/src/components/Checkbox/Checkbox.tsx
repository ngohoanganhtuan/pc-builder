/**
 * @type { Object }
 * @property { string } id - Checkbox id.
 * @property { string } label - Checkbox label.
 * @property { string } name - Checkbox name.
 * @property { string } value - Checkbox value.
 * @property { boolean } checked - Checked tick.
 * @property { Function } handleCheckboxChanged - A function handles when checkbox is changed.
 */
type Props = {
  id: string;
  label: string;
  value: string;
  name: string;
  checked: boolean;
  handleCheckboxChanged: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

/**
 * This component represents Checkbox
 */
export const Checkbox = ({ id, label, checked, name, value, handleCheckboxChanged }: Props) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={handleCheckboxChanged}
      />
      <label
        className="form-check-label brand-checkbox-label"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};
