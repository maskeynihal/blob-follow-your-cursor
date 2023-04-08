function main() {
  const blob = document.getElementById("blob");

  document.onpointermove = ({ clientX, clientY }) => {
    blob.animate(
      {
        left: `${clientX}px`,
        top: `${clientY}px`,
      },
      { duration: 2000, fill: "forwards" }
    );
  };
}

main();
