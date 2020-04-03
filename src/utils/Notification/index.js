import { notification } from "antd";

function singup(status, name, extra = "") {
  let msg = "Submitted successfully!";
  let desc = `Thank you ${name} for volunteering!`;

  if (!status) {
    msg = `Encountered ${name}`;
    desc = `Server: ${extra}`;
  }

  base(msg, desc);
}

function base(msg, desc = "") {
  notification.open({
    message: msg,
    description: desc,
    top: 88,
    duration: 3
  });
}

export default { singup, base };
