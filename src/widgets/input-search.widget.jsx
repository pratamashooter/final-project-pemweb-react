import { useEffect, useState } from "react";

import FormInput from "../components/form-input.component";

const InputSearch = ({ onSearchValueChanged }) => {
  const [didMount, setDidMount] = useState(false);
  const [search, setSearch] = useState("");

  const searchChangeHandler = ({ target: { value } }) => setSearch(value);

  useEffect(() => {
    if (didMount) {
      const delayDebounce = setTimeout(() => onSearchValueChanged?.(search), 1500);
      return () => clearTimeout(delayDebounce);
    } else {
      setDidMount(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <FormInput type="text" name="search" className="mb-8" placeholder="Search here..." onChange={searchChangeHandler} />
  );
};

export default InputSearch;
