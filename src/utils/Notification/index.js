import { notification } from "antd";

function singup(status, name, extra = "") {
  let msg = "Submitted successfully!";
  let desc = `Thank you ${name} for volunteering!`;

  if (!status) {
    msg = `Encountered ${name}`;
    desc = `Server: ${extra}`;
  }

  notification.open({
    message: msg,
    description: desc
  });
}

function base(msg, desc = "") {
  notification.open({
    message: msg,
    description: desc
  });
}

export default { singup, base };
