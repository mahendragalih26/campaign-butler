import { cn } from "@/utils/classname"
import { ComponentProps } from "react"

interface DividerProps extends ComponentProps<"div"> {
  orientation?: "horizontal" | "vertical"
  thickness?: "thin" | "medium" | "thick"
  color?: "white" | "gray" | "red" | "black" | "transparent"
}

const Divider = ({
  orientation = "horizontal",
  thickness = "medium",
  color = "white",
  className,
  ...props
}: DividerProps) => {
  const thicknessClasses = {
    thin: orientation === "horizontal" ? "border-t" : "border-l",
    medium: orientation === "horizontal" ? "border-t-4" : "border-l-4",
    thick: orientation === "horizontal" ? "border-t-8" : "border-l-8",
  }

  const colorClasses = {
    white: "border-white",
    gray: "border-gray-500",
    red: "border-red-600",
    black: "border-black",
    transparent: "border-transparent",
  }

  return (
    <div
      className={cn(
        thicknessClasses[thickness],
        colorClasses[color],
        className
      )}
      {...props}
    />
  )
}

export default Divider
