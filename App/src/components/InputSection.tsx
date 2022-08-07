import React, { useId } from "react";

export interface InputSectionProps {
  onChange?: (value: string) => void;
  label: string;
  value: string;
}

const InputSection: React.FC<InputSectionProps> = ({
  onChange = () => {},
  label,
  value,
}) => {
  const id = useId();
  return (
    <>
      <section className="bg-prime w-screen md:w-1/2 md:m-5 h-fit  p-10">
        <form className="flex flex-col">
          <label className="text-prime_text" htmlFor={"input-" + id}>
            {label}
          </label>
          <span className="h-5" />
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            rows={6}
            id={"input-" + id}
            className="text-text h-full flex-grow bg-prime outline-none"
          />
        </form>
      </section>
    </>
  );
};

export default InputSection;
