import Title from '../atoms/Title';
import Text from '../atoms/Text';
import Image from '../atoms/Image';

function ModalHeader({ title, image, text, className }) {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <Image className={`w-14 h-14 mb-4 rounded-sm ${className}`} image={image} />
      <Title text={title} className="mb-2 text-xl font-semibold" />
      <Text text={text} className="font-semibold" />
    </div>
  );
}

export default ModalHeader;