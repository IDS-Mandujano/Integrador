function Avatar({ className }) {
    return (
      <div className={`flex-shrink-0 h-12 w-12 bg-gray-300 rounded-full flex items-center justify-center ${className}`}>
        <svg className="h-8 w-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.209 0 4-1.791 4-4s-1.791-4-4-4-4 1.791-4 4 1.791 4 4 4zm0 2c-2.671 0-8 1.336-8 4v2h16v-2c0-2.664-5.329-4-8-4z" />
        </svg>
      </div>
    );
  }
  
  export default Avatar;