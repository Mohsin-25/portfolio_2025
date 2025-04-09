import { Description, Field, Input, Label } from "@headlessui/react";
import React from "react";

const TextField = ({ label, slug, setDataFn, data }) => {
  return (
    <div className="w-full">
      <Field className="text-left">
        <Label className=" text-white">{label}</Label>
        {/* <Description className="text-sm/6 text-white/50">
          Use your real name so people will recognize you.
        </Description> */}
        <Input
          autocomplete="off"
          className={
            "mt-1 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
          }
          key={slug}
          name={slug}
          value={data?.[slug]}
          onChange={(e) =>
            setDataFn((prev) => ({ ...prev, [slug]: e.target.value }))
          }
        />
      </Field>
    </div>
  );
};

export default TextField;
