import { Box, Button } from "@mui/material";
import { styled } from "@mui/system";

export const StyledRefreshButton = styled(Button)({
  color: "#29B6F2",
});

export const UpdateAlertContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  width: "100%",
});

export const UpdateAlertContentContainer = styled(Box)({
  flexGrow: 1,
});

export const UpdateAlertActionsContainer = styled(Box)({
  marginTop: "3px",
});
