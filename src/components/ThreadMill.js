import { useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";

function ThreadMill() {
  const unityContext = new UnityContext({
    loaderUrl: "UnityBuild/Build/build.loader.js",
    dataUrl: "UnityBuild/Build/webgl.data",
    frameworkUrl: "UnityBuild/Build/build.framework.js",
    codeUrl: "UnityBuild/Build/build.wasm",
    streamingAssetsUrl: "UnityBuild/StreamingAssets",
  });
  useEffect(() => {
    unityContext.on("canvas", handleOnUnityCanvas);
    return function () {
      unityContext.removeAllEventListeners();
    };
  }, []);

  function handleOnUnityCanvas(canvas) {
    canvas.setAttribute("role", "unityCanvas");
  }

  return <Unity className='unity-canvas' unityContext={unityContext} />;
}

export default ThreadMill;
