import { Fragment } from "react"

import { Label } from "./Inputs/Label"
import { SelectInput } from "./Inputs/SelectInput"
import { SelectOption } from "./Inputs/SelectOption"
import { RadioInput } from "./Inputs/RadioInput"
import { BRANDS, YEARS, INSURANCE_PLANS } from "../constants"


export const Form = () => {
    return (
        <>
            <form>
                <div className="my-5">
                    <Label className="block mb-3 font-bold text-gray-400 uppercase">
                        Brand
                    </Label>
                    <SelectInput className="w-full p-3 bg-white border border-gray-200">
                        <option value="">-- Select Brand --</option>
                        {BRANDS.map(brand => (
                            <SelectOption key={brand.id} id={brand.id} >
                                {brand.name}
                            </SelectOption>
                        ))}
                    </SelectInput>
                </div>
                <div className="my-5">
                    <Label className="block mb-3 font-bold text-gray-400 uppercase">
                        Year
                    </Label>
                    <SelectInput className="w-full p-3 bg-white border border-gray-200">
                        <option value="">-- Select Year --</option>
                        {YEARS.map(year => (
                            <SelectOption key={year} name={year}>{year}</SelectOption>
                        ))}
                    </SelectInput>
                </div>
                <div className="my-5">
                    <Label className="block mb-3 font-bold text-gray-400 uppercase">
                        Choose a plan
                    </Label>
                    <div className="flex gap-3">
                        {INSURANCE_PLANS.map(plan => (
                            <Fragment key={plan.id}>
                                <RadioInput id={plan.id} name="plan" value={plan.id}>
                                    {plan.name}
                                </RadioInput>
                            </Fragment>
                        ))}
                    </div>
                </div>
                <input type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold" value="Quote" />
            </form>
        </>
    )
}