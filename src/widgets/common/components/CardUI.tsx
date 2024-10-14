'use client';

import RadixIcon from '@/assets/radix-icon';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/shared/components/ui/card';
import { levelToKor, roleToKor } from '@/shared/lib/utils';
import { IPostView } from '@/widgets/common/types/view';
import { useRouter } from 'next/navigation';
import AvatarProfileUI from '../../../shared/components/common/card/AvatarProfileUI';
import { Button } from '../../../shared/components/ui/Button';
import Typography from '../../../shared/components/ui/typography';
import CardDescriptionUI from './CardDescriptionUI';

interface IProps {
  item: IPostView;
}

export function CardUI({ item }: IProps) {
  const router = useRouter();
  const handleCardClick = () => {
    if (!isNaN(Number(item.id))) {
      router.push(`/post/${item.id}`);
    } else {
      console.error('Invalid postId');
    }
  };

  return (
    <Card
      className='w-full rounded-none border-none cursor-pointer'
      onClick={handleCardClick}
    >
      <CardHeader>
        <AvatarProfileUI
          src={item.profiles.avatar_url}
          nickName={item.profiles.username}
          roleAndLevel={`${roleToKor[item.profiles.role]} / ${
            levelToKor[item.profiles.level]
          }`}
          createdAt={item.created_at}
        />
      </CardHeader>
      <CardContent className='pb-0'>
        <div className='flex flex-col'>
          <Typography type='h4'>{item.title}</Typography>
          <div className='flex items-end'>
            <CardDescriptionUI description={item.description} />
          </div>
          <div className='flex justify-between p-3'>
            <Typography type='p' className='text-xs text-grayScale-400'>
              좋아요 4
            </Typography>
            <Typography type='p' className='text-xs text-grayScale-400'>
              조회수 {item.view}
            </Typography>
          </div>
        </div>
      </CardContent>
      <CardFooter className='flex justify-between pb-1 pt-1 mt-2'>
        <div>
          <Button size={'icon'} variant={'ghost'}>
            <RadixIcon name='HeartIcon' size={20} />
          </Button>
          <Button size={'icon'} variant={'ghost'}>
            <RadixIcon name='ChatBubbleIcon' size={20} />
          </Button>
        </div>
        <div>
          <Button size={'icon'} variant={'ghost'}>
            <RadixIcon name='Share1Icon' size={20} />
          </Button>
          <Button size={'icon'} variant={'ghost'}>
            <RadixIcon name='BookmarkIcon' size={20} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}