import { useState } from "react";

function useOrientation() {
  const [orientation, setOrientation] = useState(/** ... */);

  return orientation;
}

export default useOrientation;