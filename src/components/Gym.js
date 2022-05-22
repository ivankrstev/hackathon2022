import video from "./Video/vr_video.mp4";

function Gym() {
  return (
    <div>
      <video loop autoPlay muted>
        <source src={video} type='video/mp4' />
      </video>
    </div>
  );
}

export default Gym;
