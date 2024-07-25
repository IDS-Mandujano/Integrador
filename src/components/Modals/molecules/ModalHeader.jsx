import Title from '../atoms/Title';
import Text from '../atoms/Text';
import Image from '../atoms/Image';

function ModalHeader({ title, text, image, className }) {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <Image className={`w-24 h-24 mb-4 rounded-sm ${className}`} image={image} />
      <Title title={title} className="mb-2 text-xl font-semibold" />
      <Text className="font-semibold">{text}</Text>
    </div>
  );
}

export default ModalHeader;