import { API_DOMAIN } from '../../config/app-config';
import { Container } from './styled';

export type PostCoverProps = {
  coverUrl: string;
  alt: string;
};

const PostCover: React.FC<PostCoverProps> = ({ coverUrl, alt }) => {
  return <Container src={`${API_DOMAIN}${coverUrl}`} alt={alt} />;
};

export default PostCover;
