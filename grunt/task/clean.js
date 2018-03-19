/* jshint strict:false */

module.exports = {
  "global": {
    files: [
      {
        expand: true, 
        cwd: 'dist/global/html/', 
        src: [
          '**/*'
        ]
      }, 
      {
        expand: true, 
        cwd: 'dist/global/css/', 
        src: [
          '**/*'
        ]
      }, 
      {
        expand: true, 
        cwd: 'dist/global/js/', 
        src: [
          '**/*'
        ]
      }
    ]
  },

  "participant-center": {
    files: [
      {
        expand: true, 
        cwd: 'dist/participant-center/html/', 
        src: [
          '**/*'
        ]
      }, 
      {
        expand: true, 
        cwd: 'dist/participant-center/css/', 
        src: [
          '**/*'
        ]
      }, 
      {
        expand: true, 
        cwd: 'dist/participant-center/js/', 
        src: [
          '**/*'
        ]
      },
      {
        expand: true, 
        cwd: 'dist/participant-center/translation/', 
        src: [
          '**/*'
        ]
      }
    ]
  }

}