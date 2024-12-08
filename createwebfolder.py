import os

def create_website_structure(root_dir):
    """
    在指定的根目录下创建网站的基本文件夹结构。
    
    :param root_dir: 网站项目的根目录路径
    """
    # 定义主要文件夹及其子文件夹
    structure = {
        'assets': ['css', 'js', 'images', 'fonts'],
        'src': [],
        'pages': [],
        'components': [],
        'data': [],
        'config': [],
        'scripts': [],
        'docs': [],
        'tests': []
    }

    # 创建根目录（如果不存在）
    if not os.path.exists(root_dir):
        os.makedirs(root_dir)
        print(f"Created root directory: {root_dir}")

    # 遍历结构字典并创建相应的文件夹
    for folder, subfolders in structure.items():
        folder_path = os.path.join(root_dir, folder)
        if not os.path.exists(folder_path):
            os.makedirs(folder_path)
            print(f"Created directory: {folder_path}")
        
        # 创建子文件夹
        for subfolder in subfolders:
            subfolder_path = os.path.join(folder_path, subfolder)
            if not os.path.exists(subfolder_path):
                os.makedirs(subfolder_path)
                print(f"Created subdirectory: {subfolder_path}")

    # 创建根目录下的文件
    files_to_create = ['index.html', 'README.md', '.gitignore']
    for file_name in files_to_create:
        file_path = os.path.join(root_dir, file_name)
        if not os.path.exists(file_path):
            open(file_path, 'a').close()  # 创建空文件
            print(f"Created file: {file_path}")

if __name__ == "__main__":
    # 设置你的项目根目录路径
    project_root = "mywebsite"
    create_website_structure(project_root)