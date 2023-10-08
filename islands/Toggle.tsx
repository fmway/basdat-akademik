import type { Signal } from "@preact/signals";

interface ToggleProps {
  toggle: Signal<boolean>;
}

export const Toggle = (toggle: ToggleProps) => {
    return (
      <div className="toggle-container">
        <label className="toggle-label">
            <input type="checkbox" defaultChecked={toggle.toggle.value} onClick={() => !toggle.toggle.value} />
            <span />
        </label>
      </div>
    )
}
