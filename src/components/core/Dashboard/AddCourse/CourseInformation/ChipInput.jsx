import { useEffect, useState, useRef } from "react"
import { MdClose } from "react-icons/md"
import { useSelector } from "react-redux"

export default function ChipInput({
  label,
  name,
  placeholder,
  register,
  errors,
  setValue,
  getValues,
}) {
  const { editCourse, course } = useSelector((state) => state.course)
  const [chips, setChips] = useState([])
  const inputRef = useRef(null) // Ref to manually control input

  // Load initial tags if in edit mode
  useEffect(() => {
    if (editCourse && course?.tag) {
      setChips(course.tag)
    }
  }, [editCourse, course])

  // Keep form state in sync with local state
  useEffect(() => {
    setValue(name, chips)
  }, [chips, name, setValue])

  // Register the field manually
  useEffect(() => {
    register(name, {
      required: true,
      validate: (value) => value.length > 0,
    })
  }, [name, register])

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault()
      const chipValue = event.target.value.trim()
      if (chipValue && !chips.includes(chipValue)) {
        setChips((prev) => [...prev, chipValue])
        event.target.value = ""
      }
    }
  }

  const handleDeleteChip = (chipIndex) => {
    setChips((prev) => prev.filter((_, i) => i !== chipIndex))
  }

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm text-richblack-5" htmlFor={name}>
        {label} <sup className="text-pink-200">*</sup>
      </label>
      <div className="flex flex-wrap w-full gap-y-2">
        {chips.map((chip, index) => (
          <div
            key={index}
            className="flex items-center px-2 py-1 m-1 text-sm bg-yellow-400 rounded-full text-richblack-5"
          >
            {chip}
            <button
              type="button"
              className="ml-2 focus:outline-none"
              onClick={() => handleDeleteChip(index)}
            >
              <MdClose className="text-sm" />
            </button>
          </div>
        ))}
        <input
          id={name}
          name={name}
          type="text"
          placeholder={placeholder}
          className="w-full form-style"
          onKeyDown={handleKeyDown}
          ref={inputRef} // not used for register, just access
        />
      </div>
      {errors[name] && (
        <span className="ml-2 text-xs tracking-wide text-pink-200">
          {label} is required
        </span>
      )}
    </div>
  )
}
