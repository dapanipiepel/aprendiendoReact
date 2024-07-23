import { useEffect, useState } from "react";

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log("efecto", { enabled });

    const handleMove = (e) => {
      const { clientX, clientY } = e;
      console.log("handleMove", { clientX, clientY });
      setPosition({ x: clientX, y: clientY });
    };

    if (enabled) {
      window.addEventListener("mousemove", handleMove);
    }

    //limpieza del evento cuando el componente se desmonta o cambian las dependencias
    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, [enabled]);

  return (
    <>
      <div
        style={{
          position: "absolute",
          backgroundColor: "#09f",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -28,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "desactivar" : "activar"} seguir puntero
      </button>
    </>
  );
};

function App() {

  return (
    <main>
      <FollowMouse/>
    </main>
  );
}

export default App;
