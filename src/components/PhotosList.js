import { useFetchPhotosQuery, useCreatePhotoMutation } from "../store"
import { Button } from './Button'
import { Skelton } from './Skelton'
import { PhotosListItem } from "./PhotosListItem"

export const PhotosList = ({ album }) => {
    const { data, error, isFetching } = useFetchPhotosQuery(album)
    const [createPhoto, addPhotoResults] = useCreatePhotoMutation();

    const handleAddPhoto = () => {
        createPhoto(album)
    }

    let content;

    if (isFetching) {
        content = <Skelton className='h-8 w-8' times={4} />
    } else if (error) {
        content = <div>Error fetching photos .....</div>
    }
    else {
        content = data.map(photo => {
            return <PhotosListItem key={photo.id} photo={photo} />
        })
    }

    return (
        <div>
            <div className="m-2 flex flex-row items-center justify-between">
                <h3 className="text-lg font-bold">Photos in {album.title}</h3>
                <Button loading={addPhotoResults.isLoading} onClick={handleAddPhoto}>
                    + Add Photo
                </Button>
            </div>
            <div className="mx-8 flex flex-row flex-wrap justify-center">
                {content}
            </div>
        </div>
    )

}