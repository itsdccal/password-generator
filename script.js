const passwordBox = document.getElementById("password");
const lenght = 12;

const generatePassword = () => {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let password = "";
  for (let i = 0; i < lenght; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }
  passwordBox.value = password;
};

function copyPassword() {
  passwordBox.select();
  navigator.clipboard.writeText(passwordBox.value);
}
