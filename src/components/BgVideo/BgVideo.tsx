import styles from "./BgVideo.module.scss";
const BgVideo = () => {
  return (
    <>
      <div className={styles.effects}></div>
      <video
        src="https://cdn.pixabay.com/video/2023/04/28/160767-822213540_small.mp4"
        autoPlay
        muted
        loop
        playsInline
        controlsList="nodownload nofullscreen"
        disablePictureInPicture
        data-testid="bg-video"
      ></video>
    </>
  );
};
export default BgVideo;
