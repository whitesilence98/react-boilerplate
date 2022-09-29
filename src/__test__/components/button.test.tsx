import React from "react";
import {render, cleanup} from "@testing-library/react";

import {Button} from "@components";

test("Button Component", () => {
   // automatically unmount and cleanup DOM after the test is finished.
   afterEach(cleanup);
   const testMessage = "Test Message";
   it("render without error", () => {
      render(<Button>{testMessage}</Button>);
   });
});
