#!/bin/bash

API_KEY="sk-mr-79b55da79b32496b83194ea6704f3cc0f0011b80c3624f6670ebc963169a51ef"
OUTPUT_DIR="/Users/dereklomas/morniplus/public/images/products"

declare -A TASKS
TASKS["tree-of-life-kimono"]="b651717c-ed04-4d4e-885c-43015f397b80"
TASKS["lotus-emergence-dress"]="965ecbc0-0c7c-4ff3-bc77-33428e077de0"
TASKS["eternal-knot-overcoat"]="37f2c458-0d4a-4b1d-bdcf-8c33e475e35f"
TASKS["serpent-wisdom-blazer"]="61d58274-35ff-48c0-bc5c-e87f1f6fe6c6"
TASKS["sacred-garden-shirt"]="4bc80f21-21f1-4f9d-890c-a4c740b300c0"
TASKS["scarab-protection-vest"]="4b8f1415-ea05-4623-b0d4-592558fd1e8e"
TASKS["byzantine-peacock-coat"]="4f5cc72d-18c6-4d86-b743-e43da2d2081d"
TASKS["nordic-rune-hoodie"]="da2d710c-6736-4509-b5ac-910d3b69a711"
TASKS["indus-valley-seal-jacket"]="fb8d8b9f-2264-48fb-9f88-5d0bfe44be5c"
TASKS["ankh-eternity-dress"]="1b4abe95-25dc-4eca-802e-9f1d44109229"

for name in "${!TASKS[@]}"; do
  task_id="${TASKS[$name]}"
  echo "Checking $name ($task_id)..."

  result=$(curl -s --request GET \
    --url "https://api.mulerouter.ai/vendors/google/v1/nano-banana-pro/generation/${task_id}" \
    --header "Authorization: Bearer ${API_KEY}")

  task_status=$(echo "$result" | python3 -c "import sys,json; print(json.load(sys.stdin)['task_info']['status'])")
  echo "  Status: $task_status"

  if [ "$task_status" = "completed" ]; then
    image_url=$(echo "$result" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d['images'][0] if d.get('images') else '')")
    if [ -n "$image_url" ]; then
      echo "  Downloading..."
      curl -sL "$image_url" -o "${OUTPUT_DIR}/${name}.png"
      echo "  -> Saved to ${name}.png"
    fi
  fi
  echo ""
done
