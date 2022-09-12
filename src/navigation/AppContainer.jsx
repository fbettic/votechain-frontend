import React from "react";
import Navigator from "./Navigatior";

import { Provider as PaperProvider } from "react-native-paper";

const AppContainer = () => {
  return (
		
			<PaperProvider>
				<Navigator />
			</PaperProvider>

  );
};

export default AppContainer;
