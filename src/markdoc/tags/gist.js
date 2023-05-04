import Gist from 'super-react-gist'

const Loading = () => <div>Waiting for Gist...</div>
const Error = () => <div>Could not fetch Gist</div>

export default function GithubGist({ url, file }) {
  return (
    <Gist
      url={url}
      file={file}
      LoadingComponent={Loading}
      ErrorComponent={Error}
    />
  )
}
