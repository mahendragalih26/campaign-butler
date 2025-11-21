const DotsIndicator = ({
  index,
  currentIndex,
  setCurrentIndex,
}: {
  index: number
  currentIndex: number
  setCurrentIndex: (index: number) => void
}) => {
  return (
    <button
      key={index}
      onClick={() => setCurrentIndex(index)}
      className={`w-2 h-2 rounded-full transition-all ${
        index === currentIndex ? "bg-red-600 w-8" : "bg-gray-300"
      }`}
    />
  )
}

export default DotsIndicator
