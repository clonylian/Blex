import Axios from "axios";

export default {
  registers: function (data) {
    return Axios.post(
      "https://xbotx.site/moon-server/api/common/user-commissions-rank",
      data
    );
  },
  getuser: function (data) {
    return Axios.post(
      "https://xbotx.site/moon-server/api/common/user-info",
      data
    );
  },
  getpoints: function (data) {
    return Axios.post("https://xbotx.site/moon-server/api/common/point", data);
  },
  login: function (data) {
    return Axios.post(
      "https://xbotx.site/moon-server/api/common/user-login",
      data
    );
  },
  link: function (data) {
    return Axios.post(
      "https://xbotx.site/moon-server/api/common/user-link",
      data
    );
  },
  verifyinvitation: function (data) {
    return Axios.post(
      "https://xbotx.site/moon-server/api/common/invitation-code-verify",
      data
    );
  },
  createinvitation: function (data) {
    return Axios.post(
      "https://xbotx.site/moon-server/api/common/invitation-code-create",
      data
    );
  },
  submit: function (data) {
    return Axios.post(
      "https://xbotx.site/moon-server/api/common/task-submit",
      data
    );
  },
  point: function (data) {
    return Axios.post("https://xbotx.site/moon-server/api/common/point", data);
  },
  toppoint: function (data) {
    return Axios.post(
      "https://xbotx.site/moon-server/api/common/top-point",
      data
    );
  },
  task: function (data) {
    return Axios.post(
      "https://xbotx.site/moon-server/api/common/user-task",
      data
    );
  },
};
