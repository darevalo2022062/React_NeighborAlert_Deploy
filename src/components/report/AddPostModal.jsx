import React, { useState } from 'react';

function AddPostModal({ onClose }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [anonymous, setAnonymous] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (images.length < 5) {
      alert('Please select at least 5 images');
      return;
    }
    // Lógica para manejar la publicación
    console.log({ title, description, category, images, anonymous });
    onClose();
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
 

    setImages(files);

    const previews = files.map(file => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Add Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Title</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Description</label>
            <textarea
              className="w-full p-2 border rounded"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Category</label>
            <select
              className="w-full p-2 border rounded"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select a category</option>
              <option value="tech">Tech</option>
              <option value="health">Health</option>
              <option value="science">Science</option>
              <option value="arts">Arts</option>
              {/* Agrega más categorías según sea necesario */}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Images (minimum 5)</label>
            <input
              type="file"
              className="w-full p-2 border rounded"
              multiple
              onChange={handleImageChange}
              accept="image/*"
              required
            />
            <div className="mt-4 grid grid-cols-3 gap-2">
              {imagePreviews.map((preview, index) => (
                <img key={index} src={preview} alt={`preview ${index}`} className="w-full h-auto" />
              ))}
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={anonymous}
              onChange={() => setAnonymous(!anonymous)}
            />
            <label className="text-gray-700">Post as anonymous</label>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPostModal;
