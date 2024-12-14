import os
import subprocess

def run_tree_command_with_powershell(output_file_path, directory):
    # 构建PowerShell命令
    powershell_command = [
        'powershell', '-NoProfile', '-Command',
        f'tree "{directory}" /F | Out-File -FilePath "{output_file_path}" -Encoding utf8'
    ]
    
    try:
        # 使用subprocess.run执行PowerShell命令
        result = subprocess.run(powershell_command, check=True)
        print(f"命令成功执行，结果已保存至 {output_file_path}")
    except subprocess.CalledProcessError as e:
        print(f"命令执行失败: {e}")

if __name__ == "__main__":
    target_directory = r"F:\work_of_website\The-work-of-website"
    output_md_file = os.path.join(target_directory, "架构.md")
    
    run_tree_command_with_powershell(output_md_file, target_directory)