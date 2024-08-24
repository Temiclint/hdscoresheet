import { Input } from "./ui/input";
import SearchIcon from "./SearchIcon"


const Search = () => {
  return (
    <div className="flex items-center text-center w-full max-w-lg space-x-2 rounded-lg border border-gray-300 bg-gray-50 dark:bg-gray-900 px-2 py-2">
					<SearchIcon className="h-4 w-4" />
					<Input
						type="search"
						placeholder="Search"
						className="w-full border-0 h-8 font-semibold"
					/>
				</div>
  )
}

export default Search