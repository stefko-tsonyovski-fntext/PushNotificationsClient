import { Typography } from "@mui/material";
import {
  StyledRefreshButton,
  UpdateAlertActionsContainer,
  UpdateAlertContainer,
  UpdateAlertContentContainer,
} from "./UpdatedAlert.styles";

const UpdatedAlert = ({ refreshHandler }) => {
  return (
    <UpdateAlertContainer>
      <UpdateAlertContentContainer>
        <Typography id="update-alert-message">
          New version is available!
        </Typography>
      </UpdateAlertContentContainer>

      <UpdateAlertActionsContainer>
        <StyledRefreshButton
          id="refresh-page"
          size="small"
          onClick={refreshHandler}
        >
          Refresh
        </StyledRefreshButton>
      </UpdateAlertActionsContainer>
    </UpdateAlertContainer>
  );
};

export default UpdatedAlert;
