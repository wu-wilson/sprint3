import { useEffect } from "react";

const Permission = ({ permissionGranted, setPermissionGranted }) => {
  useEffect(() => {
    if (typeof DeviceMotionEvent.requestPermission === "function") {
      DeviceMotionEvent.requestPermission()
        .then((permissionState) => {
          if (permissionState === "granted") {
            setPermissionGranted(true);
          }
        })
        .catch(console.error);
    } else {
      setPermissionGranted(true);
    }
    return () => {};
  }, []);

  const handlePermissionGranted = () => {
    DeviceMotionEvent.requestPermission()
      .then((permissionState) => {
        if (permissionState === "granted") {
          setPermissionGranted(true);
          window.location.reload();
        }
      })
      .catch(console.error);
  };

  return (
    <>
      {permissionGranted ? null : (
        <div>
          Test
          <button onClick={handlePermissionGranted}>Grant Permission</button>
        </div>
      )}
    </>
  );
};

export default Permission;
