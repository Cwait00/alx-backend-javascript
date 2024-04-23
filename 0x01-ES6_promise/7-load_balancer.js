export default function loadBalancer(chinaDownload, USDownload) {
  // Use Promise.race to return the value returned by the first resolving promise
  return Promise.race([chinaDownload, USDownload]);
}
